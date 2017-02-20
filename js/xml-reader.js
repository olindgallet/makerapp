/**
 * Setups the Homepage, reading data from the homepage.xml file.
 */
function initHomeXML(){
	$.ajax({
		type: "GET",
		url: "xml/homepage-data.xml",
		dataType: "xml",
		success: function(xml){
			var panelList = xml.getElementsByTagName("panel");
			var i = 0;
			var html = '<ul>';
			var image;
			
			while (i < panelList.length){
				image = panelList[i].getElementsByTagName("image")[0].firstChild.nodeValue;
				text  = panelList[i].getElementsByTagName("text")[0].firstChild.nodeValue;
				
				html = html + '<li class="panel">' + text + '</li>';
				i    = i + 1;
			}
			
			
			html = html + "</tbody></table>";
			$('#home-container').append(html);
			$('#sidebar-filler').css('height', $('#home-container').height());
		},
		failure: function(){
			$('#home-container').append('Failed to load home data.');	
		}
	});
}

/**
 * Setups the Maker Info page, reading data from the maker-data.xml file.
 */
function initMakerXML(){
	$.ajax({
		type: "GET",
		url: "xml/maker-data.xml",
		dataType: "xml",
		success: function(xml) {
			var makerList = xml.getElementsByTagName("maker");
			var i         = 0;
			var html      = '<table id="maker-list"><tbody>';
			var name, description;
			
			while (i < makerList.length){
				name        = makerList[i].getElementsByTagName("name")[0].firstChild.nodeValue;
				description = makerList[i].getElementsByTagName("description")[0].firstChild.nodeValue;
				
				html = html + '<tr><td>' + 
						   '<img src="img/beni.png" />' + 
						   '</td><td>' + 
						   '<h3>' + name + '</h3>' +
						   '<p>' + description + '</p>'
						   '</td></tr>';

				i = i + 1;
			}
			
			html = html + "</tbody></table>";
			$('#maker-container').append(html);
		},
		failure: function(){
			$('#maker-container').append('Failed to load maker data.');
		}
	});
}

initHomeXML();
initMakerXML();