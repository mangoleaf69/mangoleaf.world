// To use previous step data, pass the `steps` object to the run() function
export default defineComponent({
    async run({steps, $}) {

        let data = [
            steps.in_goa,
            steps.out_goa
        ]

        data.forEach(ws => {
            let rows = ws.$return_value
            let header = rows[1];

            for (let i = 2; i < rows.length; i++) {

                let row = rows[i];

                // name	in_goa
                // label	In Goa
                // description	People avalabe for gigs in goa
                //     curancy	₹
                // quote	"Dare to win"
                // author	NASA
                let menu = {
                    "label": "Artists",
                    "description": "People who perform and entertain your guests.",
                    "gallery": [],
                    "items": []
                }

            }


        })

        steps.list_worksheets.$return_value.forEach(ws => {
            let title = ws.properties.title


        })
        // Return data to use it in future steps
        return steps.trigger.event
    },
})