#!/bin/bash

start=$(date +%s.%N)
for i in $(seq 100)
do
    curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:3000/0
#     curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:8080/0
done
end=$(date +%s.%N)

runtime=$(python -c "print(${end} - ${start})")

echo "Runtime was $runtime"