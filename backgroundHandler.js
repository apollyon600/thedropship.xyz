
            let x = 0;
            setInterval(() => {
              x += 1;
              document.body.style.setProperty('background-position', `${x}px 0`);
              if (x > 10000) {
                x = 0;
              }
            }, 20);
            
            console.log(`
            ██████╗ ██████╗  ██████╗ ██████╗ ███████╗██╗  ██╗██╗██████╗\n\
            ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔════╝██║  ██║██║██╔══██╗\n\
            ██║  ██║██████╔╝██║   ██║██████╔╝███████╗███████║██║██████╔╝\n\
            ██║  ██║██╔══██╗██║   ██║██╔═══╝ ╚════██║██╔══██║██║██╔═══╝\n\
            ██████╔╝██║  ██║╚██████╔╝██║     ███████║██║  ██║██║██║\n\
            ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝╚═╝`);