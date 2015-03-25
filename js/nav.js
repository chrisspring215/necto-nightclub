function nav()
{
	

	/* SET NUMBER OF COLUMNS (Must change if adding/removing a night) */
	document.getElementById('globalNavLargeLis').className = 'small-block-grid-2 large-block-grid-4';


	/* ROOT LEVEL LINKS */

	/* MONDAY FULL SCREEN */
	document.getElementById('mondayNightFSroot').href='factory-monday.html';
	mondayNightFSroot.insertAdjacentHTML('afterbegin', '<strong>FACTORY</strong><br>MONDAY');

	/* THURSDAY FULL SCREEN */
	document.getElementById('thursdayNightFSroot').href='college-night-thursday.html';
	thursdayNightFSroot.insertAdjacentHTML('afterbegin', '<strong>COLLEGE NIGHT</strong><br>THURSDAY');

	/* FRIDAY FULL SCREEN */
	document.getElementById('fridayNightFSroot').href='pride-friday.html';
	fridayNightFSroot.insertAdjacentHTML('afterbegin', '<strong>PRIDE</strong><br>FRIDAY');

	/* SATURDAY FULL SCREEN */
	document.getElementById('saturdayNightFSroot').href='frequency-saturday.html';
	saturdayNightFSroot.insertAdjacentHTML('afterbegin', '<strong>FREQUENCY</strong><br>SATURDAY');



	/* MONDAY FULL SCREEN */
	document.getElementById('mondayNightFS2D').href='../factory-monday.html';
	mondayNightFS2D.insertAdjacentHTML('afterbegin', '<strong>FACTORY</strong><br>MONDAY');

	/* THURSDAY FULL SCREEN */
	document.getElementById('thursdayNightFS2D').href='../college-night-thursday.html';
	thursdayNightFS2D.insertAdjacentHTML('afterbegin', '<strong>COLLEGE NIGHT</strong><br>THURSDAY');

	/* FRIDAY FULL SCREEN */
	document.getElementById('fridayNightFS2D').href='../pride-friday.html';
	fridayNightFS2D.insertAdjacentHTML('afterbegin', '<strong>PRIDE</strong><br>FRIDAY');

	/* SATURDAY FULL SCREEN */
	document.getElementById('saturdayNightFS2D').href='../frequency-saturday.html';
	saturdayNightFS2D.insertAdjacentHTML('afterbegin', '<strong>FREQUENCY</strong><br>SATURDAY');


}