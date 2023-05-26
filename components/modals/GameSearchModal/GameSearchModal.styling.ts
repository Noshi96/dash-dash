export const getCategoryBtnStyles = (themeColor: string) => {
  return {
    h: '24',
    w: '24',
    bg: `${themeColor}.500`,
    colorScheme: themeColor,
    shadow: 3,
    borderColor: `${themeColor}.200`,
  }
}

export const getGameBtnStyles = (themeColor: string) => {
  return {
    borderColor: `${themeColor}.200`,
    h: '20',
    w: '20',
    bg: `${themeColor}.500`,
    shadow: 3,
    colorScheme: themeColor,
  }
}
