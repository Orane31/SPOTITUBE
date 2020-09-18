class CreateCollaborations < ActiveRecord::Migration[5.2]
  def change
    create_table :collaborations do |t|
      t.references :playlist, foreign_key: true
      t.references :collaborator, index: true
      t.timestamps
    end
  end
end
