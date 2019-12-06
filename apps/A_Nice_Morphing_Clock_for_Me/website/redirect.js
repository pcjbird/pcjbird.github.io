var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=5c9383a9d32ae0ad4189a509b787b11795c4b78d957543dd29705928');

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () 
{
  if (this.readyState === 4) 
  {
    if(request.getResponseHeader('content-type').indexOf('application/json') >= 0)
    {
    	var result = JSON.parse(this.responseText); // 必须从 responseText 读文本数据
    	
    	var country_code = result["country_code"];
    	if (country_code === "CN")
    	{
    		window.location = "./cn/index.html";
    	}
    	else if(country_code === "TW")
    	{
    		window.location = "./tw/index.html";
    	}
    	else if(country_code === "HK")
    	{
    		window.location = "./hk/index.html";
    	}
    	else if(country_code === "KR")
    	{
    		window.location = "./ko/index.html";
    	}
    	else if(country_code === "JP")
    	{
    		window.location = "./jp/index.html";
    	}
    	else
    	{
    		window.location = "./en/index.html";
    	}
	} 
	else{
    	window.location = "./en/index.html";
	}
  }
};

request.send(); 