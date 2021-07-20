<script>
if (location.protocol != 'https:')
{
 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
</script>
<?php
 if( isset($_GET["i"]) )
 {
 echo "<center>";
 echo "<h1>Welcome to CERV AR app</h1>";
 echo "<h2>You are requesting for: </h2>";
 echo "<h1>". $_GET['i']. "</h1>";

 echo "<h2>You will be redirect to corresponding AR App.</h2>";
 echo "<h2>The AR Model will be loaded and run after a few seconds, please be patient.</h2>";
echo "<img src='giphy.gif' alt='Loading..'>";
 echo "</center>";
header( "refresh:0;url=pin");
 }
 else
 {
 header( "refresh:0;url=autlive");
 }
?>
<html>

<body>
<center>
<!--
 <form action="<?php $_PHP_SELF ?>" method="GET">
 ID: <input type="id" name="id" />
 <input type="submit" />
 </form>
-->
</center>
</body>
</html>