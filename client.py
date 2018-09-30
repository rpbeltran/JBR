import requests 
 
URL = "http://computationist.com:8080"

r = requests.get(url = URL) 

data = r.json() 

ins  = data['results'][0]['ins']
outs = data['results'][0]['outs']

print "Ins: %s, outs: %s"%(ins, outs)
