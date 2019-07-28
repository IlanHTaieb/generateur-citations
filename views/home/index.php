<?php
ob_start();
?>

    <div class="body">
        <div class="form">
            <h1 class="text-center">Citations</h1>

            <ul class="list-group citations d-flex flex-column justify-content-center"></ul>

            <div class="form-group command">
                <select name="theme" id="theme" class="form-control mb-2 theme">
                    <option value="animaux">Animaux</option>
                    <option value="one-piece">One Piece</option>
                </select>

                <select name="nbCitations" id="nbCitations" class="form-control mb-2 nbCitations">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button class="btn btn-primary w-25 runCitations">Go !</button>
                <button class="btn btn-primary w-25 release">Reset</button>
            </div>
        </div>
    </div>

<?php
$content = ob_get_clean();
require "views/layout/app.php";
