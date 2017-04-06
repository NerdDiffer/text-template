const templatize = (str, person) => {
  const arr = str.split(' ')

  return arr.reduce((res, word, ind) => {
    let val

    if (!/^\${\w*}/.test(word)) { // is it *not* marked for interpolation?
      val = word
    } else {
      const lastBrace = word.lastIndexOf('}')
      const key = word.slice(2, lastBrace)
      val = person[key]
      // catch on any punctuation from outside the interpolation
      if (lastBrace < word.length - 1) { val += word.slice(lastBrace + 1) }
    }

    return res.concat(val)
  }, []).join(' ')
}

module.exports = templatize
