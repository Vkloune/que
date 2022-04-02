function getResult_1(string) {
return string[0].toUpperCase() + string.substring(1,string.Length);
}

console.log(getResult_1('имя'), '==','Имя')

function getResult_2(array) {
    var number = 0;

array.map (a =>{
    number = number + a;
  })

    return number;
    }
    
    console.log(getResult_2([2, 3, 4, 5]), '==', 14);
    console.log(getResult_2([-2, -3, -4, -5]), '==', -14);
    console.log(getResult_2([2, 3, 0, -4, -1]), '==', 0);


    function getResult_3(s) {
      
      const a = [
          '0','1','2','3','4','5','6','7','8','8'
      ]

      for(let i =0;i < a.length; i++ ) {
        s = s.replace(a[i], '!'); 
      }

        
        return  s;
    }
    
    
    console.log(getResult_3('Текст с числами 2 и 3 до 5.') ,'==' , 'Текст с числами ! и ! до !.')

    
    
    
    
    
    
    function getResult_4(s)  {

     
      const a = [
        'А'
    ]

    for(let i =0;i < a.length; i++ ) {
      s = s.replace(a[i], '1,'); 
    }



    const b = [
      'р'
  ]

  for(let i =0;i < a.length; i++ ) {
    s = s.replace(b[i], '17,'); 
  }



  const c = [
    'б'
]

for(let i =0;i < a.length; i++ ) {
  s = s.replace(c[i], '2,'); 
}



const d = [
  'у'
]

for(let i =0;i < a.length; i++ ) {
s = s.replace(d[i], '21,'); 
}



const e = [
  'з'
]

for(let i =0;i < a.length; i++ ) {
s = s.replace(e[i], '9'); 
}

     return s
  }
  
   console.log(getResult_4('Арбуз') ,'==' ,( '1, 17, 2, 21, 9'))
  