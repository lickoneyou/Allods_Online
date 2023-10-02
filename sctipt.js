const loot = [
  {
    title: 'Игровое время',
    src: './assets/icons/clock.png',
    free: '-',
    pay: '30 дней',
  },
  {
    title: 'Запечатанный набор инструментов',
    src: './assets/icons/toolBox.png',
    free: '1',
    pay: '1',
  },
  {
    title: 'Хрупкая чистая руна 10-й ступени',
    src: './assets/icons/rune.png',
    free: '1',
    pay: '-',
  },
  {
    title: 'Большой символ изобилия творца',
    src: './assets/icons/largeSymbol.png',
    free: '10',
    pay: '-',
  },
  {
    title: 'Мана-батарея',
    src: './assets/icons/mana.png',
    free: '-',
    pay: '20',
  },
  {
    title: 'Модуль памяти',
    src: './assets/icons/memory.png',
    free: '-',
    pay: '10',
  },
  {
    title: 'Помощник Вито ',
    src: './assets/icons/vito.png',
    free: '1',
    pay: '1',
  },
]

const drawLoot = () => {
  const wrapper = document.querySelector('.lootWrapper')

  loot.forEach((el) => {
    wrapper.innerHTML += `
  <div class="loot">
     <div>
        <img src="${el.src}" alt="${el.title}" />
        <p style='width: 160px;'>${el.title}</p>
     </div>
     <div style='width: 50%'>
        <p style='width: 50%; text-align: center; margin-left: 12px;'>${el.free}</p>
        <p style='width: 50%; text-align: center'>${el.pay}</p>
     </div>
  </div>`
  })
}

drawLoot()
