



function worker(l,b,c) {
    const logs = l;
    const background = b;
    const color = c;

    $(function() {

        $('#workplace').html(`
            <div>live, laugh, love</div>
            <div class='small'>the worker.js controls this bit, and it doesn't need deployment</div>
            it doesn't live here, it just works here
        `);

        if (logs){
            console.log("%c what are you looking for? ", `color: ${color}; background: ${background}`)
        }
        
        AOS.init();
        worker(logs);

    });
}
