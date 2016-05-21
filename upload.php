<?php
//error_reporting(false);
if(is_array($_FILES)){
	if(is_uploaded_file($_FILES['userImage']['tmp_name'])){
		if(($_FILES['userImage']['size'] <= 300000) && ($_FILES["userImage"]["type"] == "image/jpeg")){
			if(move_uploaded_file($_FILES['userImage']['tmp_name'],"upload/".$_FILES['userImage']['name'])){
				?>
					<img src="<?php echo "upload/".$_FILES['userImage']['name']; ?>">
			<?php
			}
		} else {
			echo "failed";
		}
	}
}
?>