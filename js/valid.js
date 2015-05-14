function valid()
{

	var human =  document.getElementById('human');
	
	if (human.value == 'yes' | human.value == 'Yes' | human.value == 'YES' | human.value == 'Y' | human.value == 'y' | human.value == 'yup')
		{
			
			submit.type = 'submit';
			submit.value = "CONTACT US";
		}
	else
		{

			document.getElementById('submit');
			submit.type = ' ';
			submit.value = "PLEASE FILL OUT ALL FIELDS";
		}
}