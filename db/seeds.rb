# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

recordings = []

Dir.glob(File.dirname(__FILE__) + "/recordings/*.json.lz") do |lz_file|
  lz_string = File.read(lz_file)
  regex = /recordings\/(\S*.json.lz)/
  lz_name = lz_file.match(regex)[1]
  recordings << { name: lz_name, data: lz_string }
end

Recording.create(recordings)
