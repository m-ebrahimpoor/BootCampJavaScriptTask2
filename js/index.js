// http://localhost:3000/transactions


    // transactions datas:
    const transactions = [
        { id: 10, type: 'افزایش اعتبار', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 9, type: 'برداشت از حساب', amount: 10000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 8, type: 'افزایش اعتبار', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 7, type: 'افزایش اعتبار', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 6, type: 'برداشت از حساب', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 5, type: 'افزایش اعتبار', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 4, type: 'افزایش اعتبار', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 3, type: 'افزایش اعتبار', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' },
        { id: 2, type: 'افزایش اعتبار', amount: 1000000, trackingNumber: '۱۲۳۱۲۶۴۱۱', date: 'ساعت ۱۲:۲۳   ۱۴۰۳/۰۸/۱۲' }
    ];
    
    // display transactions func()
    function displayTransactions() {
        const container = document.getElementById('transactionsBox');
    
        // create new container
        const transactionContainer = document.createElement('div');
        transactionContainer.className = 'transactions-box';
        
        // create title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'transactions-box-title';
        titleDiv.innerHTML = '<h2>لیست تراکنش‌های شما</h2>';

         // create table
        const tableDiv = document.createElement('div');
        tableDiv.className = 'transactions-box-table';
    
        const table = document.createElement('table');
    
        const thead = document.createElement('thead');
        thead.innerHTML = 
            `<tr>
                <th>ردیف</th>
                <th>نوع تراکنش</th>
                <th>مبلغ</th>
                <th>شماره پیگیری</th>
                <th>تاریخ تراکنش</th>
            </tr>`
            ;
        const tbody = document.createElement('tbody');
    
        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = 
                `<td>${transaction.id}</td>
                <td>${transaction.type}</td>
                <td>${transaction.amount.toLocaleString()} تومان</td>
                <td>${transaction.trackingNumber}</td>
                <td>${transaction.date}</td>`
            ;
            tbody.appendChild(row);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        
        // add title and table to container
        tableDiv.appendChild(table);
        transactionsBox.appendChild(titleDiv);
        transactionsBox.appendChild(tableDiv);
        
        // add container
        container.appendChild(transactionsBox);
    }
    
    // add click event to button
    document.getElementById('loadTransactionsBtn').addEventListener('click', displayTransactions);
      
