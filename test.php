<?php
$command = "ls -l";  // Replace with your desired shell command

$output = shell_exec($command);
echo "<pre>$output</pre>";
?>
