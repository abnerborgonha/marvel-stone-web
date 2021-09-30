const reduceUserName = (value: string): string => {
  const reduceName = value.split(' ')[0].trim()

  return reduceName
}

export default reduceUserName