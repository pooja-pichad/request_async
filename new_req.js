const axios=require('axios')
var fs=require('fs')
const user=require("readline-sync")

;(async () => {
    const response = await axios.get('https://api.merakilearn.org/courses')
    console.log(response)
    meraki_data=response.data
    file=JSON.stringify(meraki_data,null,3)
    a=fs.writeFileSync("id_data.json",file)
    serial_no=0
    for(course_data of meraki_data){
        console.log(serial_no+1,course_data["name"],course_data["id"])
        serial_no++;
    }
    let user_input=user.questionInt("enter a course id :-")
    console.log(meraki_data[user_input-1]["name"])
    let data1=(meraki_data[user_input-1]["id"])

    ;(async () =>{
        const response =await axios.get("https://api.merakilearn.org/courses/"+data1+"/exercises")
        console.log(response)
        meraki_data1=response.data
        file1=JSON.stringify(meraki_data1,null,4)
        b=fs.writeFileSync("course_name.json",file1)
        store=meraki_data1["course"]["exercises"]
        no=0
        for(info in store){
            console.log(no+1,store[info]["name"])
            no++;
        }
        const que=user.questionInt("enter a number:-")
        let slug=store[que]["content"]
        console.log(slug)

    })()

  })()
  
  