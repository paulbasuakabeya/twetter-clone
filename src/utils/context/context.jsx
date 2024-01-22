import React, { useState, createContext } from 'react'

export const IconContext = createContext()

export const IconProvider = ({ children }) => {

  return (
    <IconContext.Provider value={{}}>
      {children}
    </IconContext.Provider>
  )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {

  return (
    <SurveyContext.Provider value={{}}>
      {children}
    </SurveyContext.Provider>
  )
}
