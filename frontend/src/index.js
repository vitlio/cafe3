    const headerLogin = document.getElementById('header-login'); // заготовка для аутентификации
    const soundBtn = document.getElementById('sb') // кнопка подписки на звук и уведомления

    const ws = new WebSocket('ws://localhost:8080') // соединяемся вебсоккетами с сервером

    let table;

    soundBtn.addEventListener('click', subscribePermission) // это звуковое уведомление с кнопки 

    ws.onmessage = response => { // при получении сообщения с сервера
        const data = JSON.parse(response.data); // распарсиваем объект 
        table = data.table; // номер столика 
        data.type === 'call'&&play2() // если тип запроса call, тогда включаем нотификацию
    }

    async function subscribePermission(){ // функция вызывает первый вызов звукового сигнала
        let audio = document.createElement('audio') // если этого не сделать, то автоплей работать
        audio.setAttribute('id', 'audio3') // не будет 
        audio.setAttribute('src', './public/new_message_tone.mp3')
        audio.muted = true
        document.body.append(audio)

        audio.onended = () => { // после звукового сигнала удаляем элемент, чтоб они не накопились
            document.body.removeChild(audio);
        }

        audio.play()

        if(!('Notification' in window)){ // если нотификации нет в браузере, 
            console.log(('Browser does not support notifications')); // то извините,
        } else if( Notification.permission !== 'denied'){ // Если нотификации есть, а разрешения нету,
            Notification.requestPermission() // то запрашиваем разрешение
        }
    }

    async function play2(){ // функция вывода звукового сигнала и уведомления о вызове к столику
        let audio = document.createElement('audio')
        audio.setAttribute('id', 'audio3')
        audio.setAttribute('src', './public/new_message_tone.mp3')
        document.body.append(audio)

        audio.onended = () => {
            document.body.removeChild(audio);
        }

        audio.play()
        new Notification(`Вызов к столику ${table}`)
    }


