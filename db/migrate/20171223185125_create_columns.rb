class CreateColumns < ActiveRecord::Migration[5.1]
  def change
    create_table :columns do |t|
      t.string :title
      t.string :image
      t.text :text

      t.timestamps
    end
  end
end
