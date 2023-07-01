



function worker(l,b,c) {
    const logs = l;
    const background = b;
    const color = c;

    $(function() {

        $('#workplace').html(`
            <div class='text-highlight fw-bold'>can you read this? I haven't deployed anything: IM FUCKING FURIOUS AND I DONT FUCKING CARE 🤑</div>
            <div class='small'>the worker.js controls this bit, and it doesn't need deployment</div>
            <div class='small'>it doesn't live here, it just works here</div>
            <div class='small'>the css file isnt here either</div>
            
        `);

        if (logs){
            console.log("%c worker ", `color: ${color}; background: ${background}`)
        }

        // $.getScript("content.js");
        
    });
}
