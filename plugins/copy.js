if (process.env.NODE_ENV === 'production') {
  const copyText = `

---------------------
作者：饲养员
链接：${location.href}
来源：https://guaiwola.com
商业转载请联系作者获得授权，非商业转载请注明出处。`

  document.addEventListener('copy', e => {
    if (!window.getSelection) {
      return
    }
    const content = window.getSelection().toString()
    e.clipboardData.setData('text/plain', content + copyText)
    e.clipboardData.setData('text/html', content + copyText)
    e.preventDefault()
  })
}
