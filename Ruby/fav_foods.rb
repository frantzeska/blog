def fav_foods
  food_array = [] # instead of the brackets, you can also use Array.new to make a new empty array
  3.times do
  puts "Name a favorite food."
  food_array << gets.chomp
  end
  p food_array #print out the array
  puts "Your favorite foods are #{food_array.join(", ")}."
  food_array.each { |food| puts "I like #{food} too!" }
end
fav_foods