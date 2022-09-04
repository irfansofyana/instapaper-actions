const axios = require('axios')
const FormData = require('form-data')
const core = require('@actions/core');

class Client {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    async addURL(url, title="", selection="") {
        try {
            const config = {
                method: 'post',
                url: "https://www.instapaper.com/api/add",
                auth: {
                    username: this.username,
                    password: this.password,
                },
                data: this.buildFormData(url, title, selection)
            }
        
            return await axios(config)
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    buildFormData(url, title, selection) {
        let data = new FormData()
        
        data.append('url', url)
        data.append('title', title)
        data.append('selection', selection)
       
        return data
    }
}

main = async () => {
    try {
        const username = core.getInput('username')
        const password = core.getInput('password')
        const url = core.getInput('url')
        const title = core.getInput('title')
        const selection = core.getInput('selection')

        const client = new Client(username, password)
        await client.addURL(url, title, selection)
    } catch (error) {
        core.setFailed(error.message);
    }
}

main()