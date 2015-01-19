class CreateRecordings < ActiveRecord::Migration
  def change
    create_table :recordings do |t|
      t.string :name
      t.text :data

      t.timestamps null: false
    end
  end
end
