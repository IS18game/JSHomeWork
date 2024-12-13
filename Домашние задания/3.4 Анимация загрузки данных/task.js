
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            const valutes = data.response.Valute;
            for (const key in valutes) {
                if (valutes.hasOwnProperty(key)) {
                    const currency = valutes[key];

                    const item = document.createElement('div');
                    item.className = 'item';

                    const itemCode = document.createElement('div');
                    itemCode.className = 'item__code';
                    itemCode.textContent = currency.CharCode;

                    const itemValue = document.createElement('div');
                    itemValue.className = 'item__value';
                    itemValue.textContent = currency.Value;

                    const itemCurrency = document.createElement('div');
                    itemCurrency.className = 'item__currency';
                    itemCurrency.textContent = 'руб.';

                    item.appendChild(itemCode);
                    item.appendChild(itemValue);
                    item.appendChild(itemCurrency);
                    itemsContainer.appendChild(item);
                }
            }
            loader.classList.remove('loader_active');
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных о курсе валют:', error);
            loader.classList.remove('loader_active');
        });
});
