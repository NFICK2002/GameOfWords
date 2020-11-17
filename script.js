//Переменные для инпутов
const varNum1 = $('#first');
const varNum2 = $('#second');
const varNum3 = $('#third');
const varNum4 = $('#four');
const varNum5 = $('#five');
const varNum6 = $('#six');
const mySpeach = $('#speach');

//Отдельный див и кнопки
const ourText = $('.our-text'); //Поле для вставляемого текста
const createText = $('.create__text'); //Кнопка создания текста
const resetVars = $('.reset__anyone'); //Кнопка для замены слов

//Наш объект с текстом
const startTextObj = {
   "text":[
      "Жили-были {var1} да {var2}",
      "Была у них {var3}",
      "Снесла {var3} {var4}, не простое - золотое",
      "- {var1} бил, бил - не разбил",
      "- {var2} била, била - не разбила",
      "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
      "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
   ]
};

//Вставляем наш текст в отдельный div по нажатию на кнопку
createText.click(function() {
   ourText.html(startTextObj.text);
});

//Заменяем вар'ы в тексте по нажатию на кнопку
resetVars.click(function() {
   const var1 = varNum1.val();
   const var2 = varNum2.val();
   const var3 = varNum3.val();
   const var4 = varNum4.val();
   const var5 = varNum5.val();
   const var6 = varNum6.val();
   const varSpeach = mySpeach.val();

   console.log('var1: ',var1);
   console.log('var2: ',var2);
   console.log('var3: ',var3);
   console.log('var4: ',var4);
   console.log('var5: ',var5);
   console.log('var6: ',var6);
   console.log('speach: ',varSpeach);

   const startNewObject = {
   "text":[
      `Жили-были ${var1} да ${var2} `,
      `Была у них ${var3} `,
      `Снесла ${var3 } ${var4 }, не простое - золотое`,
      `- ${var1 } бил, бил - не разбил`,
      `- ${var2 } била, била - не разбила`,
      `${var5 } бежала, ${var6 } задела, ${var4 } упало и разбилось.`,
      `${var1 } плачет, ${var2 } плачет, а ${var3 } кудахчет:`,`${ varSpeach }`
   ]
};
   
   ourText.html(startNewObject.text);
});





