
name := "plots"

version := "1.0"

lazy val `plots` = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( javaJdbc ,  cache , javaWs )

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

libraryDependencies += "org.postgresql" % "postgresql" % "9.4.1211"

libraryDependencies +="org.hibernate" % "hibernate-entitymanager" % "4.3.6.Final"
