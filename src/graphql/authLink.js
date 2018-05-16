import { ApolloLink, Observable } from 'apollo-link';
import { retrieveCookie } from './cookie';

const request = async operation => {
  const cookie = await retrieveCookie();
  operation.setContext(context => {
    if (!cookie) {
      return context;
    }
    return {
      ...context,
      headers: {
        ...context.headers,
        cookie,
      },
    };
  });
};

export default new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    }),
);
