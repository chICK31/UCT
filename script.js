<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="personality_code.png"/>

    <title>MBTI Compatibility Checker</title>
</head>
<body>
    <h1>MBTI Compatibility Checker</h1>
    <form id="mbtiForm">
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select><br><br>
        
        <label for="octagram">Octagram:</label>
        <select id="octagram" name="octagram">
            <option value="SD | SF">SD | SF</option>
            <option value="SD | UF">SD | UF</option>
            <option value="UD | SF">UD | SF</option>
            <option value="UD | UF">UD | UF</option>
        </select><br><br>
        
        <label for="mbtiType">MBTI Type:</label>
        <select id="mbtiType" name="mbtiType">
            <option value="ISTJ">ISTJ</option>
            <option value="ISFJ">ISFJ</option>
            <option value="INFJ">INFJ</option>
            <option value="INTJ">INTJ</option>
            <option value="ISTP">ISTP</option>
            <option value="ISFP">ISFP</option>
            <option value="INFP">INFP</option>
            <option value="INTP">INTP</option>
            <option value="ESTP">ESTP</option>
            <option value="ESFP">ESFP</option>
            <option value="ENFP">ENFP</option>
            <option value="ENTP">ENTP</option>
            <option value="ESTJ">ESTJ</option>
            <option value="ESFJ">ESFJ</option>
            <option value="ENFJ">ENFJ</option>
            <option value="ENTJ">ENTJ</option>

            <!-- Add all other MBTI types here -->
        </select><br><br>

        <label for="sortingPreference">Sorting Preference:</label>
        <select id="sortingPreference" name="sortingPreference">
            <option value="Octagram">Octagram</option>
            <option value="Temple">Temple</option>
            <option value="Quadra">Quadra</option>
        </select><br><br>
        
        <button type="button" onclick="processForm()">Check Compatibility</button>
    </form>

    <div id="results">
        <!-- Results will be displayed here -->
    </div>

    <script src="script.js"></script>
</body>
</html>
