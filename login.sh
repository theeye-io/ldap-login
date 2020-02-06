user=$1
pass=$2

curl -i -X POST \
	--data '{"username":"' ${user} '","password":"' ${pass} '"}' \
	--header "content-type: application/json" \
	"http://127.0.0.1:8080/login" 
