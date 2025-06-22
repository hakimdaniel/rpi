const bulans = ["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]
const haris = ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]
const form = document.getElementById("myForm")
let tarikh = new Date()

function getTemplateRpi(name,quote){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Output</title>
</head>
<body>
<pre style="font-size:20px;">
*[RPI 24/25]*

*${haris[tarikh.getDay()].toUpperCase()} | ${tarikh.getDate()} ${bulans[tarikh.getMonth()].toUpperCase()} ${tarikh.getFullYear()}*

${quote}

*YANG MENJALANKAN TUGAS*
*${name.toUpperCase()}*
*EXCO TARBIAH DAN MODAL INSAN,*
*KELAB RAKAN PUSAT ISLAM,*
*UITM CAWANGAN PULAU PINANG*
*SESI 2024/2025*
</pre>
</body>
</html>
`
}

function setToArea(nama,quote,template){
    let templateData
    if (template === "kata-hikmah-etmi"){
        templateData = getTemplateRpi(nama,quote)
    }else{
        templateData = null
    }
    const win = window.open('','_blank')
    win.document.write(templateData)
};

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const formData = new FormData(form)
    const template = formData.get("template")
    const nama = formData.get("ajkName")
    const quote = formData.get("quoteText")
    setToArea(nama,quote,template)

})
