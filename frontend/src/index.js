
    console.log('priva2');
    const headerLogin = document.getElementById('header-login');
    const soundBtn = document.getElementById('sb')
    soundBtn.addEventListener('click', play2)

    async function play2() {
        let audio = document.createElement('audio')
        audio.setAttribute('id', 'audio3')
        audio.setAttribute('src', './public/new_message_tone.mp3')
        document.body.append(audio)

        audio.onended = () => {
            document.body.removeChild(audio);
        }

        audio.play()
    }


