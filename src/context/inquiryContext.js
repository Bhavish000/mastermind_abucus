import { createContext, useContext, useState } from 'react';

const InquiryContext = createContext();

export const InquiryProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <InquiryContext.Provider value={{ data, setData }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => useContext(InquiryContext);