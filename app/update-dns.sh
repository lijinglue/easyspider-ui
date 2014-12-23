DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ES_HEAD=$1
ES_HADOOP_MGR=$2

if [ -z ES_HEAD ] || [ -z ES_HADOOP_MGR ]; then
  echo "Please supply the address of ElasticSearch ipaddress and Hadoop sync mgr address"
  exit 1
fi

pushd $DIR
# if template
[ -f scripts/main.js.template ] && cp scripts/main.js.template scripts/main.js
[ -f scripts/main.js.template ] || cp scripts/main.js scripts/main.js.template
sed -e "s|ES-HEAD|$ES_HEAD|g" -e "s|ES-HADOOP-MGR|$ES_HADOOP_MGR|g" -i scripts/main.js
popd
