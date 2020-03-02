CBTFilter = function(_filter){

    let filter = {}
    _filter.map(e => {
        filter = {[e]:"", ...filter}
    })

    const p = [].slice.call(document.querySelectorAll('p[align=\'center\']'));

    this.run = function() {
        p.map(e => {
            let cur_p = e;
            let txt = cur_p.innerText.split(":")[1];
            if ( typeof txt === 'string' ) {
                if(txt.trim() in filter === false) {
                    cur_p.style.display = "none";
                    let next = cur_p.nextSibling;
                    while (true) {
                        if ( next.tagName in {"TABLE":"","BR":""} ) {
                            next.style.display = "none";
                            next = next.nextSibling;
                        } else {
                            break;
                        }
                    }
                }
            }
        });
    }

    this.print = function() {
        window.print()
    }
}
