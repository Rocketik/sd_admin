import './toast.css'

export const inoToast = {
    newToast: (type, message) => {
        let showTimeout = null
        let hideTimeout = null
        let progressInterval = null

        let count = 100
        
        if(typeof message === 'string') {
            let container = document.getElementById("ino-toast-container")
        
            let toast = document.createElement('div')
                toast.className = `ino-toast ino-${type}-toast`
                toast.classList.add('ino-toast-hide')
            
            let text = document.createElement('p')
                text.innerText = message
                text.className = 'ino-text'
            
            toast.appendChild(text)
        
            container.appendChild(toast)
    
            let button = document.createElement('div')
            button.className = `remove-ino-toast ino-${type}-toast`
            
      
            
            button.innerHTML = `<i aria-hidden="true" role="img" class="material-icons q-icon notranslate">close</i>`
            button.onclick = function() {
                removeToast(0)
            }
    
            toast.appendChild(button)
    
            let progress = document.createElement('div')
                progress.className = 'ino-progress'
                progress.style.width = count + '%'
    
            progressToast()
    
            toast.appendChild(progress)
    
            clearTimeout(showTimeout)
            showTimeout = setTimeout(() => {
                toast.classList.remove('ino-toast-hide')
                toast.classList.add('ino-toast-show')
            }, 100);
    
            toast.onmouseover = function() {
                clearTimeout(hideTimeout)
                clearInterval(progressInterval)
            }
    
            toast.onmouseleave = function() {
                progressToast()
            }
    
            removeToast(1000)
    
            function removeToast(_timeout) {
                clearTimeout(hideTimeout)
                hideTimeout = setTimeout(() => {
                    toast.classList.remove('ino-toast-show')
                    toast.classList.add('ino-toast-hide')
                    setTimeout(() => {
                        toast.remove()
                    }, 500);
                }, _timeout);
            }
    
            function progressToast() {
                clearInterval(progressInterval)
                progressInterval = setInterval(() => {
                    count = count - 1
                    progress.style.width = count + '%'
                    removeToast(count * 100)
                }, 50);
            }
        }
    },

    success: (message) => inoToast.newToast('success', message),
    error: (message) => inoToast.newToast('error', message),
    warning: (message) => inoToast.newToast('warning', message)
}