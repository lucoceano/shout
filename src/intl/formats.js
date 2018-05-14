export default {
  date: {
    full: {
      pt: { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' },
      en: { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' },
    },
    matchDay: {
      pt: {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
      en: {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    dayAndMonth: {
      pt: { day: 'numeric', month: 'numeric' },
      en: { day: 'numeric', month: 'numeric' },
    },
  },
  time: {
    hour: {
      pt: { hour: 'numeric' },
      en: { hour: 'numeric' },
    },
  },
};
