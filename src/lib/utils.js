/**
 * Utility function to format phone numbers for tel: links
 * @param {string} phone - Phone number to format
 * @returns {string} Formatted phone number
 */
export const formatPhoneLink = (phone) => {
  return `tel:${phone.replace(/[\s()-]/g, '')}`;
};

/**
 * Utility function to create email mailto links
 * @param {string} email - Email address
 * @returns {string} Mailto link
 */
export const formatEmailLink = (email) => {
  return `mailto:${email}`;
};

/**
 * Utility function to combine class names conditionally
 * @param  {...any} classes - Class names to combine
 * @returns {string} Combined class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
