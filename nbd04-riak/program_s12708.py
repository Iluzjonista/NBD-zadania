import riak
#Connect to riak
print("#Connect to riak..")
client = riak.RiakClient(port=8087)
#Creating and selecting a bucket
print("#Creating and selecting a bucket..")
myBucket = client.bucket('s12708')
print("#Inserting JSON(or any data) into the bucket..")
#Inserting JSON(or any data) into the bucket
camera1 = {
'name' : 'Olympus',
'model' : 'e6',
'price' : 2000,
'dostepnosc' : True
}

obj = myBucket.new('camera1',data=camera1)
obj.store()
print("#Retrieving data from a bucket")
#Retrieving data from a bucket
result = myBucket.get('camera1')
print("")
print result.data

print("")
print("#Giving new information for a product..")
camera2 = {
'name' : 'Olympus',
'model' : 'e610',
'price' : 2500,
'dostepnosc' : False
}

obj = myBucket.new('camera1',data=camera2)
obj.store()
print("#Retrieving data from a bucket after update")
print("")
#Retrieving data from a bucket
result = myBucket.get('camera1')
print result.data

print("")
print("#Deleting data from a bucket..")
#Deleting data from a bucket
result.delete()
print("#Retrieving data from a bucket")
#Retrieving data from a bucket
result = myBucket.get('camera1')
print("")
print result.data
