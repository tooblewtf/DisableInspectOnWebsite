    (function() {
        'use strict';
        
        // Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Disable text selection
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Disable drag and drop
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+P
        document.addEventListener('keydown', function(e) {
            // F12 key
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+Shift+I (Developer Tools)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+U (View Source)
            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+S (Save Page)
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+A (Select All)
            if (e.ctrlKey && e.keyCode === 65) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+P (Print)
            if (e.ctrlKey && e.keyCode === 80) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+Shift+C (Inspect Element)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
            }
            
            // Ctrl+Shift+K (Web Console)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
                e.preventDefault();
                return false;
            }
        });
        
        // Disable copy, cut, paste
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            return false;
        });
        
        document.addEventListener('cut', function(e) {
            e.preventDefault();
            return false;
        });
        
        document.addEventListener('paste', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Disable developer tools detection
        let devtools = {
            open: false,
            orientation: null
        };
        
        const threshold = 160;
        
        setInterval(function() {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    console.clear();
                    console.log('%cDeveloper Tools Detected!', 'color: red; font-size: 50px; font-weight: bold;');
                    console.log('%cThis website is protected. Please close developer tools.', 'color: red; font-size: 20px;');
                }
            } else {
                devtools.open = false;
            }
        }, 500);
        
        // Disable console methods
        (function() {
            const noop = function() {};
            const methods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'clear', 'count', 'dir', 'dirxml', 'group', 'groupCollapsed', 'groupEnd', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp', 'trace'];
            
            for (let i = 0; i < methods.length; i++) {
                console[methods[i]] = noop;
            }
        })();
        
        console.log('%cWarning!', 'color: red; font-size: 30px; font-weight: bold;');
        console.log('%cThis is a browser feature intended for developers. Do not enter any code here.', 'color: red; font-size: 16px;');
        
    })();
