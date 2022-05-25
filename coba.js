<!DOCTYPE html>
<html >
<head>
    <title>Quis Perkalian</title>
    <style type="text/css">
        *{
            margin: 0; padding: 0; border: 0;
            box-sizing: border-box;
        }
        html,body { height: 100%; }
        body {
            display: flex;
            justify-content: center;
            align-items: center;

            background: #001;
            color: #fff;
        }

    </style>
</head>
<body>
    <div game>
        <h1>Quis Perkalian</h1>
        <div progress-soal>1/10 Soal</div>
        <div>berapa hasil dari 5x2</div>
        <div>
            <input jawab-soal type="number">
        </div>
        <div>
            <button onclick="kirimJawaban()" >Kirim</button>
            <button onclick="mulaiGame()">mulai ulang</button>
        </div>
    </div>
    <script type="text/javascript">
        var quis_soal = null
        var quis_total = null
        var quis_score = null

        var soal_jawab = null

        el = (str)=> {
            return document.querySelector(srt)
        }

        acakSoal = ()=>{
            let a = Math.floor(Math.random()*10)+1
            let b = Math.floor(Math.random()*10)+1
            soal_jawab = a*b

            el("[progress-soal]").innerHTML = `${quis_soal} / ${quis_total} Soal`
            el("[quis-soal]").innerHTML = `Berapa hasil dari ${a} x ${b}`
        }

        mulaiGame = ()=>{
            quis_soal= 1
            quis_total= 10
            quis_score = 0
            acakSoal()
        }

        window.onload = ()=> {
            mulaiGame()
        }
    </script>
</body>
</html>