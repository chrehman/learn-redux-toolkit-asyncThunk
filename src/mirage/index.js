import { createServer } from "miragejs"

export default function () {
    createServer({
        routes() {
            this.namespace='api'
            this.get("/count", () => {
                return 5
            },{
                timing:1000
            })
        },
    })
}