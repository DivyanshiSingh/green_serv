export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAIL_SERVICE_ID,
  templateId: process.env.REACT_APP_TEMPLATE_ID,
  userId: process.env.REACT_APP_EMAILJS_USER_ID,
  templateId2: process.env.REACT_APP_TEMPLATE_ID_2,
};

export const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease:"easeInOut", duration: 0.4 },
  },
};
