import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const memoizedValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <div className={theme === 'light' ? 'light' : 'dark'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

