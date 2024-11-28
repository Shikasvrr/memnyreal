const imageList = [
    'https://i.pinimg.com/736x/5a/e4/ea/5ae4ea6a3c77a4ec1bf83b8339d14ded.jpg',
    'https://i.pinimg.com/736x/71/45/14/7145147d381f8f030be18a3211aff819.jpg',
    'https://i.pinimg.com/736x/56/8b/b2/568bb2cb94dbc16110f969f59b7ea36f.jpg',
    'https://i.pinimg.com/736x/33/f5/37/33f537156876b94f823195067f87ab16.jpg',
    'https://i.pinimg.com/736x/f6/13/b9/f613b91f8011ed7efb8f08ec502d7456.jpg',
    'https://i.pinimg.com/736x/8e/a9/38/8ea938c2608bfac5cb0a7067e323f608.jpg',
    'https://i.pinimg.com/736x/a7/24/7b/a7247b95aecdee7930d8e6b0b99c7351.jpg',
    'https://i.pinimg.com/736x/52/f4/e4/52f4e4bcd2bf6335ea54ffb9d7accb10.jpg',
    'https://i.pinimg.com/736x/36/7d/08/367d08a5a5c8533ee894cf851cecfec8.jpg',
    'https://i.pinimg.com/736x/24/be/4e/24be4e40db8e54332eff0f28853712ae.jpg',
    'https://i.pinimg.com/736x/a6/a0/c7/a6a0c76b695733c06b95fe8d398ca1af.jpg',
    'https://i.pinimg.com/736x/c7/ae/54/c7ae54059e24b490059df479a2b73316.jpg',
    'https://i.pinimg.com/736x/ca/c6/c4/cac6c43b0e8f218e023a17913cd36403.jpg',
    'https://i.pinimg.com/736x/3b/5c/17/3b5c175f6bc173b9de9494c5dddfc59e.jpg',
    'https://i.pinimg.com/736x/bd/58/48/bd5848969abf7d7cb7390db7d429eca3.jpg',
    'https://i.pinimg.com/736x/19/86/db/1986dbeb80c8826f407db565072cf074.jpg',
    'https://i.pinimg.com/736x/61/73/3a/61733ad5822715a439bfc41ec35ee885.jpg',
    'https://i.pinimg.com/736x/77/16/a4/7716a451c013026b842f799b92aebb3d.jpg',
    'https://i.pinimg.com/736x/7c/8d/d1/7c8dd11031c099d85815a9f7dc1e8ea1.jpg',
    'https://i.pinimg.com/736x/29/c9/c3/29c9c31c3ea3c0d4c301b9c84af9e974.jpg',
    'https://i.pinimg.com/736x/b9/bc/7a/b9bc7a928226df8109d0d74d04ca5a79.jpg',
    'https://i.pinimg.com/736x/75/93/45/7593452e3953c24a17af18cc74208e3f.jpg',
    'https://i.pinimg.com/736x/e5/e6/c2/e5e6c2346394dd9934451312034c1fd1.jpg',
    'https://i.pinimg.com/736x/96/3c/a1/963ca13282c4c7ef1a8eb03159c7e021.jpg',
    'https://i.pinimg.com/736x/24/1e/dd/241eddf62e30e2616df890120d7367ed.jpg',
    'https://i.pinimg.com/736x/7e/d3/e4/7ed3e4286ce15f09f568f7565c0c1696.jpg',
    'https://i.pinimg.com/736x/66/8f/3c/668f3cf2d13f97705b0c8e6d1def182c.jpg',
    'https://i.pinimg.com/736x/cb/7c/21/cb7c21a0077096e16f0ebe821b4e3aa5.jpg',
    'https://i.pinimg.com/736x/79/37/2e/79372ebb50a5cfaeb8695747c0c7fd9e.jpg',
    'https://i.pinimg.com/736x/b3/86/1a/b3861afeeefe3127fba0f0ded94ee744.jpg',
  ]
  const img = document.querySelector('.img')
  const next = document.getElementById('next')
  
  var numImage = 0
  img.src = imageList[numImage]
  
  next.addEventListener('click', () => {
    numImage++
    if (numImage >= imageList.length) {
      numImage = 0
    }
    console.log(numImage >= imageList.length)
    console.log(numImage)
    img.src = imageList[numImage]
  })