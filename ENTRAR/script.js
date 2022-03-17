function criar() {
  const password = document.getElementById('passoword')
  const confirm = document.getElementById('confirm')
  const res = document.getElementById('res')

  if (password != confirm) {
    res.innerHTML = 'Senha inválida, tente novamente'
  } else {
    res.innerHTML = "Conta criada"
  }
}

function sair() {
  const res = document.getElementById('res')
  res.innerHTML = '...'

}