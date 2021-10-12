<?php
/**
 * @var string $attachment_url
 * @var string $caption
 * @var string $track_url
 */
?>
<img id="bpost-logo" alt="bpost-logo" src="<?php echo BPOST_PLUGIN_URL ?>/public/images/bpost-logo.png"/>

<a class="button" href="<?php echo $attachment_url ?>">
	<i style="color: #e51837" class="fa fa-print" aria-hidden="true"></i>
	<?php
	echo bpost__( 'Show label' );
	?>
</a>

<br>
<a href="<?php echo $track_url ?>" target="_blank" class="button">
	<i style="color: #e51837" class="fa fa-truck" aria-hidden="true"></i>
	<?php
	echo bpost__( 'Show tracking' );
	?>
</a>

<?php
if ( $caption ) {
	echo '<p>' . $caption . '</p>';
}
?>


<div class="clear"></div>