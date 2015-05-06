<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('projects', function($table) {
            $table->increments('id');
            $table->string('type');
            $table->string('name');
            $table->string('subheading')->nullable();
            $table->text('image');
            $table->string('description');
            $table->text('project_link')->nullable();
            $table->text('code_link')->nullable();
            $table->timestamps();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('projects');
	}

}
